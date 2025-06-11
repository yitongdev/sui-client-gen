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
import { ID, UID } from "../../../0x2/object/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFungibleStakedSui(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::FungibleStakedSui`;
}

export interface FungibleStakedSuiFields {
  id: ToField<UID>;
  poolId: ToField<ID>;
  value: ToField<"u64">;
}

export type FungibleStakedSuiReified = Reified<
  FungibleStakedSui,
  FungibleStakedSuiFields
>;

/**
 * Move struct: `FungibleStakedSui`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class FungibleStakedSui implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::FungibleStakedSui`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FungibleStakedSui.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::FungibleStakedSui`;
  readonly $typeArgs: [];
  readonly $isPhantom = FungibleStakedSui.$isPhantom;

  readonly id: ToField<UID>;
  readonly poolId: ToField<ID>;
  readonly value: ToField<"u64">;

  private constructor(typeArgs: [], fields: FungibleStakedSuiFields) {
    this.$fullTypeName = composeSuiType(
      FungibleStakedSui.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSui`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.poolId = fields.poolId;
    this.value = fields.value;
  }

  static reified(): FungibleStakedSuiReified {
    return {
      typeName: FungibleStakedSui.$typeName,
      fullTypeName: composeSuiType(
        FungibleStakedSui.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSui`,
      typeArgs: [] as [],
      isPhantom: FungibleStakedSui.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        FungibleStakedSui.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FungibleStakedSui.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FungibleStakedSui.fromBcs(data),
      bcs: FungibleStakedSui.bcs,
      fromJSONField: (field: any) => FungibleStakedSui.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FungibleStakedSui.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FungibleStakedSui.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FungibleStakedSui.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        FungibleStakedSui.fetch(client, id),
      new: (fields: FungibleStakedSuiFields) => {
        return new FungibleStakedSui([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FungibleStakedSui.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FungibleStakedSui>> {
    return phantom(FungibleStakedSui.reified());
  }
  static get p() {
    return FungibleStakedSui.phantom();
  }

  static get bcs() {
    return bcs.struct("FungibleStakedSui", {
      id: UID.bcs,
      pool_id: ID.bcs,
      value: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): FungibleStakedSui {
    return FungibleStakedSui.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      value: decodeFromFields("u64", fields.value),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FungibleStakedSui {
    if (!isFungibleStakedSui(item.type)) {
      throw new Error("not a FungibleStakedSui type");
    }

    return FungibleStakedSui.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      value: decodeFromFieldsWithTypes("u64", item.fields.value),
    });
  }

  static fromBcs(data: Uint8Array): FungibleStakedSui {
    return FungibleStakedSui.fromFields(FungibleStakedSui.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      poolId: this.poolId,
      value: this.value.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): FungibleStakedSui {
    return FungibleStakedSui.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      value: decodeFromJSONField("u64", field.value),
    });
  }

  static fromJSON(json: Record<string, any>): FungibleStakedSui {
    if (json.$typeName !== FungibleStakedSui.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FungibleStakedSui.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FungibleStakedSui {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFungibleStakedSui(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FungibleStakedSui object`,
      );
    }
    return FungibleStakedSui.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FungibleStakedSui {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isFungibleStakedSui(data.bcs.type)
      ) {
        throw new Error(`object at is not a FungibleStakedSui object`);
      }

      return FungibleStakedSui.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FungibleStakedSui.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<FungibleStakedSui> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching FungibleStakedSui object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isFungibleStakedSui(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a FungibleStakedSui object`);
    }

    return FungibleStakedSui.fromSuiObjectData(res.data);
  }
}
