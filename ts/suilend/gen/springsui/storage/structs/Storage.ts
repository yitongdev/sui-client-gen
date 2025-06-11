import * as reified from "../../../_framework/reified.js";
import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { Balance } from "../../../_dependencies/onchain/0x2/balance/structs/index.js";
import { SUI } from "../../../_dependencies/onchain/0x2/sui/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { ValidatorInfo as ValidatorInfo1 } from "./ValidatorInfo.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStorage(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::storage::Storage`;
}

export interface StorageFields {
  suiPool: ToField<Balance<ToPhantom<SUI>>>;
  validatorInfos: ToField<Vector<ValidatorInfo1>>;
  totalSuiSupply: ToField<"u64">;
  lastRefreshEpoch: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type StorageReified = Reified<Storage, StorageFields>;

/**
 * Move struct: `Storage`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 */
export class Storage implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::storage::Storage`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Storage.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::storage::Storage`;
  readonly $typeArgs: [];
  readonly $isPhantom = Storage.$isPhantom;

  readonly suiPool: ToField<Balance<ToPhantom<SUI>>>;
  readonly validatorInfos: ToField<Vector<ValidatorInfo1>>;
  readonly totalSuiSupply: ToField<"u64">;
  readonly lastRefreshEpoch: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: StorageFields) {
    this.$fullTypeName = composeSuiType(
      Storage.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::storage::Storage`;
    this.$typeArgs = typeArgs;

    this.suiPool = fields.suiPool;
    this.validatorInfos = fields.validatorInfos;
    this.totalSuiSupply = fields.totalSuiSupply;
    this.lastRefreshEpoch = fields.lastRefreshEpoch;
    this.extraFields = fields.extraFields;
  }

  static reified(): StorageReified {
    return {
      typeName: Storage.$typeName,
      fullTypeName: composeSuiType(
        Storage.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::storage::Storage`,
      typeArgs: [] as [],
      isPhantom: Storage.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Storage.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Storage.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Storage.fromBcs(data),
      bcs: Storage.bcs,
      fromJSONField: (field: any) => Storage.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Storage.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Storage.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Storage.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => Storage.fetch(client, id),
      new: (fields: StorageFields) => {
        return new Storage([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Storage.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Storage>> {
    return phantom(Storage.reified());
  }
  static get p() {
    return Storage.phantom();
  }

  static get bcs() {
    return bcs.struct("Storage", {
      sui_pool: Balance.bcs,
      validator_infos: bcs.vector(ValidatorInfo1.bcs),
      total_sui_supply: bcs.u64(),
      last_refresh_epoch: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Storage {
    return Storage.reified().new({
      suiPool: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.sui_pool,
      ),
      validatorInfos: decodeFromFields(
        reified.vector(ValidatorInfo1.reified()),
        fields.validator_infos,
      ),
      totalSuiSupply: decodeFromFields("u64", fields.total_sui_supply),
      lastRefreshEpoch: decodeFromFields("u64", fields.last_refresh_epoch),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Storage {
    if (!isStorage(item.type)) {
      throw new Error("not a Storage type");
    }

    return Storage.reified().new({
      suiPool: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.sui_pool,
      ),
      validatorInfos: decodeFromFieldsWithTypes(
        reified.vector(ValidatorInfo1.reified()),
        item.fields.validator_infos,
      ),
      totalSuiSupply: decodeFromFieldsWithTypes(
        "u64",
        item.fields.total_sui_supply,
      ),
      lastRefreshEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.last_refresh_epoch,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Storage {
    return Storage.fromFields(Storage.bcs.parse(data));
  }

  toJSONField() {
    return {
      suiPool: this.suiPool.toJSONField(),
      validatorInfos: fieldToJSON<Vector<ValidatorInfo1>>(
        `vector<${ValidatorInfo1.$typeName}>`,
        this.validatorInfos,
      ),
      totalSuiSupply: this.totalSuiSupply.toString(),
      lastRefreshEpoch: this.lastRefreshEpoch.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): Storage {
    return Storage.reified().new({
      suiPool: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.suiPool,
      ),
      validatorInfos: decodeFromJSONField(
        reified.vector(ValidatorInfo1.reified()),
        field.validatorInfos,
      ),
      totalSuiSupply: decodeFromJSONField("u64", field.totalSuiSupply),
      lastRefreshEpoch: decodeFromJSONField("u64", field.lastRefreshEpoch),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): Storage {
    if (json.$typeName !== Storage.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Storage.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Storage {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStorage(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Storage object`,
      );
    }
    return Storage.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Storage {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isStorage(data.bcs.type)) {
        throw new Error(`object at is not a Storage object`);
      }

      return Storage.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Storage.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Storage> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Storage object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStorage(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Storage object`);
    }

    return Storage.fromSuiObjectData(res.data);
  }
}
