import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { ID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isListing(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::kiosk::Listing`;
}

export interface ListingFields {
  id: ToField<ID>;
  isExclusive: ToField<"bool">;
}

export type ListingReified = Reified<Listing, ListingFields>;

/**
 * Move struct: `Listing`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 */
export class Listing implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::kiosk::Listing`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Listing.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::kiosk::Listing`;
  readonly $typeArgs: [];
  readonly $isPhantom = Listing.$isPhantom;

  readonly id: ToField<ID>;
  readonly isExclusive: ToField<"bool">;

  private constructor(typeArgs: [], fields: ListingFields) {
    this.$fullTypeName = composeSuiType(
      Listing.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::kiosk::Listing`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.isExclusive = fields.isExclusive;
  }

  static reified(): ListingReified {
    return {
      typeName: Listing.$typeName,
      fullTypeName: composeSuiType(Listing.$typeName, ...[]) as `${typeof PKG_V35}::kiosk::Listing`,
      typeArgs: [] as [],
      isPhantom: Listing.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Listing.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Listing.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Listing.fromBcs(data),
      bcs: Listing.bcs,
      fromJSONField: (field: any) => Listing.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Listing.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => Listing.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => Listing.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Listing.fetch(client, id),
      new: (fields: ListingFields) => {
        return new Listing([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Listing.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Listing>> {
    return phantom(Listing.reified());
  }
  static get p() {
    return Listing.phantom();
  }

  static get bcs() {
    return bcs.struct("Listing", {
      id: ID.bcs,
      is_exclusive: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): Listing {
    return Listing.reified().new({
      id: decodeFromFields(ID.reified(), fields.id),
      isExclusive: decodeFromFields("bool", fields.is_exclusive),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Listing {
    if (!isListing(item.type)) {
      throw new Error("not a Listing type");
    }

    return Listing.reified().new({
      id: decodeFromFieldsWithTypes(ID.reified(), item.fields.id),
      isExclusive: decodeFromFieldsWithTypes("bool", item.fields.is_exclusive),
    });
  }

  static fromBcs(data: Uint8Array): Listing {
    return Listing.fromFields(Listing.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      isExclusive: this.isExclusive,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): Listing {
    return Listing.reified().new({
      id: decodeFromJSONField(ID.reified(), field.id),
      isExclusive: decodeFromJSONField("bool", field.isExclusive),
    });
  }

  static fromJSON(json: Record<string, any>): Listing {
    if (json.$typeName !== Listing.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Listing.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Listing {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isListing(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Listing object`);
    }
    return Listing.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Listing {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isListing(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Listing object`);
      }

      return Listing.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Listing.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Listing> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Listing object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isListing(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Listing object`);
    }

    return Listing.fromSuiObjectData(res.data);
  }
}
