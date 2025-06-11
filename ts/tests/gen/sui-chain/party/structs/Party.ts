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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { VecMap } from "../../vec-map/structs/index.js";
import { Permissions as Permissions1 } from "./Permissions.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isParty(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V31}::party::Party`;
}

export interface PartyFields {
  default: ToField<Permissions1>;
  members: ToField<VecMap<"address", Permissions1>>;
}

export type PartyReified = Reified<Party, PartyFields>;

/**
 * Move struct: `Party`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 */
export class Party implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::party::Party`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Party.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::party::Party`;
  readonly $typeArgs: [];
  readonly $isPhantom = Party.$isPhantom;

  readonly default: ToField<Permissions1>;
  readonly members: ToField<VecMap<"address", Permissions1>>;

  private constructor(typeArgs: [], fields: PartyFields) {
    this.$fullTypeName = composeSuiType(
      Party.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::party::Party`;
    this.$typeArgs = typeArgs;

    this.default = fields.default;
    this.members = fields.members;
  }

  static reified(): PartyReified {
    return {
      typeName: Party.$typeName,
      fullTypeName: composeSuiType(
        Party.$typeName,
        ...[],
      ) as `${typeof PKG_V31}::party::Party`,
      typeArgs: [] as [],
      isPhantom: Party.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Party.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Party.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Party.fromBcs(data),
      bcs: Party.bcs,
      fromJSONField: (field: any) => Party.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Party.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Party.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Party.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Party.fetch(client, id),
      new: (fields: PartyFields) => {
        return new Party([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Party.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Party>> {
    return phantom(Party.reified());
  }
  static get p() {
    return Party.phantom();
  }

  static get bcs() {
    return bcs.struct("Party", {
      default: Permissions1.bcs,
      members: VecMap.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
        Permissions1.bcs,
      ),
    });
  }

  static fromFields(fields: Record<string, any>): Party {
    return Party.reified().new({
      default: decodeFromFields(Permissions1.reified(), fields.default),
      members: decodeFromFields(
        VecMap.reified("address", Permissions1.reified()),
        fields.members,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Party {
    if (!isParty(item.type)) {
      throw new Error("not a Party type");
    }

    return Party.reified().new({
      default: decodeFromFieldsWithTypes(
        Permissions1.reified(),
        item.fields.default,
      ),
      members: decodeFromFieldsWithTypes(
        VecMap.reified("address", Permissions1.reified()),
        item.fields.members,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Party {
    return Party.fromFields(Party.bcs.parse(data));
  }

  toJSONField() {
    return {
      default: this.default.toJSONField(),
      members: this.members.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Party {
    return Party.reified().new({
      default: decodeFromJSONField(Permissions1.reified(), field.default),
      members: decodeFromJSONField(
        VecMap.reified("address", Permissions1.reified()),
        field.members,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): Party {
    if (json.$typeName !== Party.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Party.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Party {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isParty(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Party object`,
      );
    }
    return Party.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Party {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isParty(data.bcs.type)) {
        throw new Error(`object at is not a Party object`);
      }

      return Party.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Party.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Party> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Party object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isParty(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Party object`);
    }

    return Party.fromSuiObjectData(res.data);
  }
}
