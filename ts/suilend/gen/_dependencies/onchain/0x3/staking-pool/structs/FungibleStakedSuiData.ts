import * as reified from "../../../../../_framework/reified.js";
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
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Balance } from "../../../0x2/balance/structs/index.js";
import { UID } from "../../../0x2/object/structs/index.js";
import { SUI } from "../../../0x2/sui/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isFungibleStakedSuiData(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::FungibleStakedSuiData`;
}

export interface FungibleStakedSuiDataFields {
  id: ToField<UID>;
  totalSupply: ToField<"u64">;
  principal: ToField<Balance<ToPhantom<SUI>>>;
}

export type FungibleStakedSuiDataReified = Reified<
  FungibleStakedSuiData,
  FungibleStakedSuiDataFields
>;

/**
 * Move struct: `FungibleStakedSuiData`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class FungibleStakedSuiData implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::FungibleStakedSuiData`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = FungibleStakedSuiData.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::FungibleStakedSuiData`;
  readonly $typeArgs: [];
  readonly $isPhantom = FungibleStakedSuiData.$isPhantom;

  readonly id: ToField<UID>;
  readonly totalSupply: ToField<"u64">;
  readonly principal: ToField<Balance<ToPhantom<SUI>>>;

  private constructor(typeArgs: [], fields: FungibleStakedSuiDataFields) {
    this.$fullTypeName = composeSuiType(
      FungibleStakedSuiData.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSuiData`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.totalSupply = fields.totalSupply;
    this.principal = fields.principal;
  }

  static reified(): FungibleStakedSuiDataReified {
    return {
      typeName: FungibleStakedSuiData.$typeName,
      fullTypeName: composeSuiType(
        FungibleStakedSuiData.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::FungibleStakedSuiData`,
      typeArgs: [] as [],
      isPhantom: FungibleStakedSuiData.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => FungibleStakedSuiData.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        FungibleStakedSuiData.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => FungibleStakedSuiData.fromBcs(data),
      bcs: FungibleStakedSuiData.bcs,
      fromJSONField: (field: any) => FungibleStakedSuiData.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => FungibleStakedSuiData.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        FungibleStakedSuiData.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        FungibleStakedSuiData.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => FungibleStakedSuiData.fetch(client, id),
      new: (fields: FungibleStakedSuiDataFields) => {
        return new FungibleStakedSuiData([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return FungibleStakedSuiData.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<FungibleStakedSuiData>> {
    return phantom(FungibleStakedSuiData.reified());
  }
  static get p() {
    return FungibleStakedSuiData.phantom();
  }

  static get bcs() {
    return bcs.struct("FungibleStakedSuiData", {
      id: UID.bcs,
      total_supply: bcs.u64(),
      principal: Balance.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): FungibleStakedSuiData {
    return FungibleStakedSuiData.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      totalSupply: decodeFromFields("u64", fields.total_supply),
      principal: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.principal,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): FungibleStakedSuiData {
    if (!isFungibleStakedSuiData(item.type)) {
      throw new Error("not a FungibleStakedSuiData type");
    }

    return FungibleStakedSuiData.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      totalSupply: decodeFromFieldsWithTypes("u64", item.fields.total_supply),
      principal: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.principal,
      ),
    });
  }

  static fromBcs(data: Uint8Array): FungibleStakedSuiData {
    return FungibleStakedSuiData.fromFields(FungibleStakedSuiData.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      totalSupply: this.totalSupply.toString(),
      principal: this.principal.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): FungibleStakedSuiData {
    return FungibleStakedSuiData.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      totalSupply: decodeFromJSONField("u64", field.totalSupply),
      principal: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.principal,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): FungibleStakedSuiData {
    if (json.$typeName !== FungibleStakedSuiData.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return FungibleStakedSuiData.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): FungibleStakedSuiData {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isFungibleStakedSuiData(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a FungibleStakedSuiData object`,
      );
    }
    return FungibleStakedSuiData.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): FungibleStakedSuiData {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isFungibleStakedSuiData(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a FungibleStakedSuiData object`);
      }

      return FungibleStakedSuiData.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return FungibleStakedSuiData.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<FungibleStakedSuiData> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching FungibleStakedSuiData object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isFungibleStakedSuiData(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a FungibleStakedSuiData object`);
    }

    return FungibleStakedSuiData.fromSuiObjectData(res.data);
  }
}
